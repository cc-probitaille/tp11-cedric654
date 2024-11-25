import * as dotenv from "dotenv";
dotenv.config();

export function createClass<T>(className: string): new (...args: any[]) => T {
  class DynamicClass {
    [key: string]: any;

    constructor(...args: any[]) {
      // Il serait possible d'avoir des méthodes, cependant seulement des attributs pour l'instant.
    }
  }

  Object.defineProperty(DynamicClass, "name", { value: className });

  return DynamicClass as new (...args: any[]) => T;
}
