import { Group } from 'src/groups/entities/group.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('residentials')
export class Residential {
  @PrimaryGeneratedColumn('increment')
  residential_id: number;

  @Column()
  residential_group_id: number;

  @Column()
  residential_name: string;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;

  @ManyToOne(() => Group)
  @JoinColumn({ name: 'residential_group_id' })
  group: Group;
}
