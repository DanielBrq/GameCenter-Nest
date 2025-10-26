import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../../modules/Auth/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // Si no hay roles requeridos, permitir acceso
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        // Verificar si el usuario tiene al menos uno de los roles requeridos
        const hasRole = requiredRoles.some((role) => user.roles?.includes(role));

        if (!hasRole) {
            throw new ForbiddenException(
                `Acceso denegado. Se requiere: ${requiredRoles.join(', ')}`
            );
        }

        return true;
    }
}