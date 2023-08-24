"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineDocument } from "react-icons/hi";
import { GrDocumentUpdate } from "react-icons/gr";
import swal from "sweetalert";
export default function CardItem() {
  const handleDelete = async () => {
    const willSearch = await swal({
      text: "Are You sure?",
      button: {
        text: "Delete",
        closeModal: false,
      },
    });

    if (willSearch) {
      try {
        // const result = await fetch("http://pokeapi.co/api/v2/pokemon/1");
        // const json = await result.json();
        // console.log(json);
        swal("Yaa!", "Your Data is successfully Deleted", "success");
      } catch (err) {
        swal("Oops!", "Seems like we couldn't fetch the info", "error");
      }
    }
  };
  return (
    <TableRow>
      <TableCell className="font-medium">01</TableCell>
      <TableCell>example@gmail.com</TableCell>
      <TableCell>Name of </TableCell>
      <TableCell className="text-right flex justify-end">
        <div className="flex">
          <Link title="Details" href={`/details/${"id23"}`}>
            <HiOutlineDocument className=" cursor-pointer h-6 w-6 hover:border mx-4" />
          </Link>
          <Link title="Update" href={`/update/${"id23"}`}>
            <GrDocumentUpdate className=" cursor-pointer h-6 w-6 hover:border mx-4" />
          </Link>
          <AiOutlineDelete
            title="Delete"
            onClick={handleDelete}
            className=" cursor-pointer h-6 w-6 hover:border mx-4"
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
