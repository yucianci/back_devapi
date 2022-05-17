import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Conector {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  privacity: string;

  @Prop()
  base_url: string;

  @Prop()
  logo_url: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ default: null })
  deleted_at: Date;
}

export type ConectorDocument = Conector & Document;

export const ConectorSchema = SchemaFactory.createForClass(Conector);
