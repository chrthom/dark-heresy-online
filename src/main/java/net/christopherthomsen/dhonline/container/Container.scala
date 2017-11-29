package net.christopherthomsen.dhonline.container

import java.lang.reflect.Field
import java.lang.{Long => JavaLong, Integer => JavaInt}

abstract class Container {
  def get: Map[String, Any] =
    (Map[String, Any]() /: getFields(this.getClass)) { (m, f) =>
      f setAccessible true
      m + (f.getName -> f.get(this))
    }

  def set(k: String, v: Any): Unit = if (Option(v).isDefined)
    this.getClass.getMethods find (_.getName == k + "_$eq") foreach {
      m =>
        if (v.isInstanceOf[JavaLong]) try {
          m.invoke(this, v.asInstanceOf[JavaLong])
        } catch {
          case _: IllegalArgumentException => m.invoke(this, v.asInstanceOf[JavaLong].toInt.asInstanceOf[JavaInt])
        } else m.invoke(this, v.asInstanceOf[AnyRef])
    }

  def fieldType(k: String): Class[_] =
    this.getClass.getMethods.find(_.getName == k + "_$eq").get.getParameterTypes()(0)

  def genericFieldType(k: String): Any =
    this.getClass.getMethods.find(_.getName == k + "_$eq").get.getGenericParameterTypes()(0)

  def indexed: Set[String]

  private def getFields(clazz: Class[_], fields: List[Field] = Nil): List[Field] =
    if (Option(clazz.getSuperclass).isEmpty || clazz.getSuperclass == classOf[Container])
      clazz.getDeclaredFields.toList ::: fields
    else getFields(clazz.getSuperclass, clazz.getDeclaredFields.toList ::: fields)
}

abstract class RootContainer[T <: RootContainer[T]] extends Container {
  var id: String = _
  var timestamp: JavaLong = System.currentTimeMillis

  def getId: String = id

  def setId(id: String): T = {
    this.id = id
    this.asInstanceOf[T]
  }

  def getTimestamp: JavaLong = timestamp

  def setTimestamp(timestamp: JavaLong): T = {
    this.timestamp = timestamp
    this.asInstanceOf[T]
  }
}

class StringTuple extends Container {
  var key: String = _
  var value: String = _

  override def indexed: Set[String] = Set[String]()

  def getKey: String = key

  def setKey(key: String): StringTuple = {
    this.key = key
    this
  }

  def getValue: String = value

  def setValue(value: String): StringTuple = {
    this.value = value
    this
  }
}

class NumericTuple extends Container {
  var key: String = _
  var value: JavaLong = _

  override def indexed: Set[String] = Set[String]()

  def getKey: String = key

  def setKey(key: String): NumericTuple = {
    this.key = key
    this
  }

  def getValue: JavaLong = value

  def setValue(value: JavaLong): NumericTuple = {
    this.value = value
    this
  }
}