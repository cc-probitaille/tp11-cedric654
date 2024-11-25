import { createClass } from "../dynamicClassCreator";
import * as dotenv from "dotenv";

dotenv.config();

interface Book {
  title: string;
  author: string;
}

describe("createClass with env variables", () => {
  it("should create a class with the given methods from env variables", () => {
    const className = process.env.CLASS_NAME;

    const BookClass = createClass<Book>(className!);

    const book = new BookClass();
    const title =
      "Applying UML and patterns : an introduction to object-oriented analysis and design and iterative development";
    const author = "Craig Larman";
    book.title = title;
    book.author = author;

    expect(book.title).toBe(title);
    expect(book.author).toBe(author);
  });
});
