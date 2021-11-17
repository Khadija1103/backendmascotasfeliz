import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductoOServicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  descuento: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;



  constructor(data?: Partial<ProductoOServicio>) {
    super(data);
  }
}

export interface ProductoOServicioRelations {
  // describe navigational properties here
}

export type ProductoOServicioWithRelations = ProductoOServicio & ProductoOServicioRelations;
