import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post } from "@nestjs/common";

import path from "path";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./pipes/book.pipes";

@Controller("book")

export class BookController{

    @Get("/:id")

    findBookById(@Param("id",ParseBoolPipe) id: number): string{
        console.log(id, typeof(id));
        
        return "book by id"
    }


    @Post("/add")
    addBook(@Body(new BookPipe()) book: BookDto): string {
        return "add book";  
    }
}