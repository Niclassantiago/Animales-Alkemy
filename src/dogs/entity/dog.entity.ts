import { User } from 'src/users/entity/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Dog {
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
