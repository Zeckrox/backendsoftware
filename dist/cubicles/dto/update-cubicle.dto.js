"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCubicleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cubicle_dto_1 = require("./create-cubicle.dto");
class UpdateCubicleDto extends (0, mapped_types_1.PartialType)(create_cubicle_dto_1.CreateCubicleDto) {
}
exports.UpdateCubicleDto = UpdateCubicleDto;
//# sourceMappingURL=update-cubicle.dto.js.map