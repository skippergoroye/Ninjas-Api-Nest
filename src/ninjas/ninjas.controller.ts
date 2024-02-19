import { Controller, Get, Post } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

    // GET /ninjas --> []
    @Get()
    getNinjas(){
        return[];
    }
    
    // GET  /ninjas/:id  --> { .... }
    @Get(':id')
    getOneNinja() {
        return {};
    }

    // POST /ninjas
    @Post()
    createNinjas(){
        return {}
    }

    
    // PUT  /ninja/:id --> { ... }]]
    // DELETE /ninjas/:id 


}
