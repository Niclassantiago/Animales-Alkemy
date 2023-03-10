import { User } from 'src/users/entity/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @ManyToOne(() => User, (user) => user.id)
  owner?: User;
}
