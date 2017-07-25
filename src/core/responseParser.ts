export class ResponseParser {
  public parse<T>(response: string): T {
    // For now it's realllly easy, but maybe someday we'll have to remove some stuff or handle more complex stuff.
    let returnValue: T = JSON.parse(response)

    return returnValue
  }
}
