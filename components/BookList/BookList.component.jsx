import { useState } from "react";
import { Data } from "../../constants";
import Books from "../Book/Books.component";
import Heading from "../Heading/Heading.component";
import Task from "../Task/Task.component";
import History from "../History/History.component";
import { Outlet } from "react-router-dom";

const BookList = () => {
  <Outlet/>
  const [books, setBooks] = useState(Data);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bookEdit, setIsBookEdit] = useState("");

  const editOptionHandler = (id) => {
    console.log("hoit")
    setIsTaskOpen(true);
    books.map((book) => {
      if (book.id === id) {
        setIsBookEdit(book);
      }
    });
  };

  const editHandler = (id, updatedTitle, updatedAuthor) => {
    console.log("HIT")
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: updatedTitle, author: updatedAuthor };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const deleteHandler = (id) => {
    const remainBook = books.filter((book) => book.id !== id);
    setBooks(remainBook);
    // console.log(remainBook);
  };

  return (
    <>
      <History
        books={books}
        editOptionHandler={editOptionHandler}
        deleteHandler={deleteHandler}
        />
      <Task
        isTaskOpen={isTaskOpen}
        setIsTaskOpen={setIsTaskOpen}
        isEditing={isEditing}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        bookEdit={bookEdit}
      />
    </>
  );
};

export default BookList;
