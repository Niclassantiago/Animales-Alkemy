import { Cat } from 'src/cats/entity/cat.entity';
import { Dog } from 'src/dogs/entity/dog.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => Dog, (dog) => dog.id)
  dogs?: Dog[];

  @OneToMany(() => Cat, (cat) => cat.id)
  cats?: Cat[];

  @Column()
  email: string;
}
