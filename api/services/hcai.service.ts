import {AbstractController} from '../controllers/abstract.controller';
import {CRUD} from "../../common/interfaces/crud.interface";
import { HcaiDto } from "../dto/hcai.dto";
import Hcai from '../models/hcai.model';

class HcaiService implements CRUD {
    hcaiDto = new AbstractController(Hcai);

    async create(resource: HcaiDto) {
        return this.hcaiDto.addData(resource);
    }

    async deleteById(resourceId: string) {
        return this.hcaiDto.removeDataById(resourceId);
    };

    async list(limit: number, page: number, projections: object = {}) {
        return this.hcaiDto.getData(limit, page, projections);
    };

    async readById(resourceId: string, projections: object = {}) {
        return this.hcaiDto.getDataById(resourceId, projections);
    };

    async updateById(resource: HcaiDto) {
        return this.hcaiDto.putDataById(resource);
    };

    async getUsersByConditions(conditions: object, projections: object, populate: object) {
        return this.hcaiDto.getByConditions(conditions, projections, populate);
    }
}

export default new HcaiService();