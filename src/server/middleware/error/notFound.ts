import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
    if (req.accepts('html')) {
        res.render('pages/error/error', {erro: "Pagina Não Encontrada"});
        return;
    }
}