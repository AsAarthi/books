import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";
import { Data } from "../../constants";

const Books = ({
  imageUrl,
  title,
  author,
  id,
  books,
  setBooks,
  editHandler,
  deleteHandler,
  updatedTitle,
  updatedAuthor,
  setIsTaskOpen,
  editOptionHandler
}) => {

const updateHandler = (id)=>{
  editHandler(id,updatedTitle,updatedAuthor)
  editOptionHandler(id)

}
const handleDelete = ()=>{
  deleteHandler(id)
}
  return (
    <main
      className="flex justify-start items-center my-[2rem] px-[1rem]"
      key={id}
    >
      <div className="flex items-center gap-2 pb-[2rem] w-[60%]">
        <div className="w-[20%] pl-[5rem]">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="flex w-[20%] pl-[11rem] gap-32 items-center">
          <span className=" text-[20px] font-[700]">{title}</span>
          <span className="text-[20px] font-[700] pl-[2rem]">{author}</span>
        </div>
      </div>
      <div className="flex justify-evenly w-[30%] mx-auto cursor-pointer gap-40">
        <MdModeEdit
          className="text-[35px] text-green-500"
          onClick={()=> updateHandler(id)}
        />
        <TbHttpDelete
          className="text-[35px] text-red-600"
          onClick={handleDelete}
        />
      </div>
    </main>
  );
};

export default Books;
