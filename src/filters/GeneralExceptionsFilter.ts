import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { QueryFailedError } from "typeorm";

@Catch()
export class GeneralExceptionsFilter implements ExceptionFilter {
    catch(exceptiom: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        console.log(exceptiom)

        const { status, message, error } = this.transformException(exceptiom)

        response.status(status).json({
            statusCode: status,
            error,
            message,
            timestamp: new Date().toISOString(),
            path: request.url
        })
    }

    transformException(exception: unknown) {
        switch (true) {
            case exception instanceof HttpException:
                return { status: exception.getStatus(), error: exception.name, message: exception.getResponse() }
            case exception instanceof QueryFailedError:
                return { status: 500, error: exception.name, message: exception.driverError.detail }
            default:
                return { status: 500, error: "", message: "A server error occured." }
        }
    }
}

