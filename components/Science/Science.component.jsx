import { useState } from "react";
import { Data } from "../../constants";
import Heading from "../Heading/Heading.component";
import Task from "../Task/Task.component";
import { Outlet } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";

const Science = () => {
  <Outlet/>
  const [books, setBooks] = useState(Data);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bookEdit, setIsBookEdit] = useState("");

  const editOptionHandler = (id) => {
    setIsTaskOpen(true);
    books.map((book) => {
      if (book.id === id) {
        setIsBookEdit(book);
      }
    });
  };

  const editHandler = (id, updatedTitle, updatedAuthor) => {
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
      <Heading />
      {books.map((book) => {
        // console.log(book);
        if(book.class==='Science')
        {
          return (
      <main
      className="flex justify-start items-center my-[2rem] px-[1rem]"
      key={book.id}
    >
      <div className="flex items-center gap-2 pb-[2rem] w-[60%]">
        <div className="w-[20%] pl-[5rem]">
          <img src={book.imageUrl} alt={book.title} />
        </div>
        <div className="flex w-[20%] pl-[11rem] gap-32 items-center">
          <span className=" text-[20px] font-[700]">{book.title}</span>
          <span className="text-[20px] font-[700] pl-[2rem]">{book.author}</span>
        </div>
      </div>
      <div className="flex justify-evenly w-[30%] mx-auto cursor-pointer gap-40">
        <MdModeEdit
          className="text-[35px] text-green-500"
          onClick={()=> editOptionHandler(book.id)}
        />
        <TbHttpDelete
          className="text-[35px] text-red-600"
          onClick={()=> deleteHandler(book.id)}
        />
      </div>
    </main>
    );}
  })}
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

export default Science;
