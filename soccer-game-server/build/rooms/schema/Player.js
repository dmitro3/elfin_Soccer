"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
class Player extends schema_1.Schema {
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "posx", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "posy", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "posz", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "vecX", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "life", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "skinId", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "shadowX", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "shadowY", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "shadowW", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "shadowH", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "playerNumber", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "fighter", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "state", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "userId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "walletId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "ticket", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "passCred", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "reserveSeat", void 0);
