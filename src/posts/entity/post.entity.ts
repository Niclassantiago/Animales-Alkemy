import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tags: string;

  @Column()
  imageUrl: string;
}
