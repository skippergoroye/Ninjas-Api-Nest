import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';


@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {

    }


    // Get/ninjas?weapon=fast --> []
    @Get()
    getQueryNinjas(@Query('weapon') weapon: 'stars' | 'nunchuks') {
        return this.ninjasService.getNinjas(weapon)
    }





    // GET  /ninjas/:id  --> { .... }
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        try {
            return this.ninjasService.getNinja(+id)
        } catch (error) {
            throw new NotFoundException();
        }
    }
     



    // POST /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto)
    }



    // PUT  /ninja/:id --> { ... }]]
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(+id, updateNinjaDto)
    }


    

    // DELETE /ninjas/:id 
    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        return this.ninjasService.removeNinja(+id);
    }


    // GET /ninjas --> []
    // @Get()
    // getNinjas(){
    //     return[];
    // }
    

    // Get/ninjas?type=fast --> []
    // @Get()
    // getQueryNinjass(@Query('type') type: string) {
    //     return [{type}];
    // }
}
