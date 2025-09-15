import { Response } from "express";

type ResponseData = object | object[];

export function successResponse(
    res: Response,
    status: number,
    message: string,
    data: ResponseData
) {
    return res.status(status).json({
        errorCode: null,
        status,
        message,
        success: true,
        data,
    });
}

export function errorResponse(
    res: Response,
    status: number,
    message: string,
    data: ResponseData = {}
) {
    return res.status(status).json({
        errorCode: status,
        status,
        message,
        success: false,
        data,
    });
}
