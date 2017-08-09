export class ResponseParser {
  public parse<T>(response: string): T | string {
    // For now it's realllly easy, but maybe someday we'll have to remove some stuff or handle more complex stuff.
    let returnValue: T | string
    try {
      returnValue = JSON.parse(response)
    } catch (e) {
      console.log("Cannot parse:" + response + " as JSON" + e)
      returnValue = response
    }

    return returnValue
  }
}
