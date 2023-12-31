import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";
import { Data } from "../../constants";
import Heading from "../Heading/Heading.component";

const History = ({
    books,
    deleteHandler,
    editOptionHandler
  }) => {
const updateHandler = (id)=>{
  editOptionHandler(id)

}
const handleDelete = (id)=>{
  deleteHandler(id)
}
  return (
    <>
        <Heading/>
    {books.map((book) => {
      console.log(book);
      console.log(book.class);
    if(book.class === `History`)
    {
    return(
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
          onClick={()=> updateHandler(book.id)}
        />
        <TbHttpDelete
          className="text-[35px] text-red-600"
          onClick={()=> handleDelete(book.id)}
        />
      </div>
    </main>
  )}
  })}
  </>
  );
};

export default History;
