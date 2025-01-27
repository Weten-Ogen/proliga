import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request,Response } from "express";
import { ProductService } from "./service.product";

const createProduct = (async(req:Request,res:Response)=>{
 const result = await ProductService.createProduct(req.body);
 sendResponse(res,{
    statusCode: httpStatus.CREATED,
    success:true,
    message:"Product created successfully",
    data:result
 })
})


const getProducts= catchAsync(async(req:Request,res:Response) =>{
    
    const result = await ProductService.getProducts()
    
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success:true,
        message:"Fetched all products ",
        data: result
    })
})

const searchProduct = catchAsync(async(req:Request,res:Response) => {
    const {query} = await req.body
    const result = await ProductService.searchProduct(query)
    sendResponse(res , {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "fetched the searched query",
        data: result 
    })
})  

const getProductById = catchAsync(async(req:Request,res:Response) =>{
    const id  = req.params;
    const result = await ProductService.getProductById(id);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: `fetched product at id : ${id}`,
        data: result

    })
})

const getProductByFilter = catchAsync(async(req,res) => {
    const filter = req.params
    const filteredprods = await ProductService.getProductsbyFilter(filter);
    
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "got product by filter",
        data: filteredprods
    })
})

export const ProductController = {
    createProduct,
    getProductById,
    getProducts,
    getProductByFilter,
    searchProduct
}