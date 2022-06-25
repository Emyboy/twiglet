/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description - This class handle strapi errors
 */

export class StrapiError {
    ctx: any;
    errorMessage: string;
    errorDetails: unknown;

    constructor(context: unknown, message: string, details: unknown) {
        this.ctx = context;
        this.errorMessage = message;
        this.errorDetails = details;
    }

    badRequest(): void {
        if (this.ctx) {
            return this.ctx.badRequest(this.errorMessage, this.errorDetails);
        }
    }

    serverError(): void {
        if (this.ctx) {
            //Todo: Save error log
            return this.ctx.internalServerError(this.errorMessage, this.errorDetails);
        }
    }

    Unauthorized(): void {
        if (this.ctx) {
            return this.ctx.unauthorized(this.errorMessage, this.errorDetails);
        }
    }

    PaymentRequired(): void {
        if (this.ctx) {
            return this.ctx.paymentRequired(this.errorMessage, this.errorDetails);
        }
    }

    NotFound(): void {
        if (this.ctx) {
            return this.ctx.notFound(this.errorMessage, this.errorDetails);
        }
    }
}
