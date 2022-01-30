import { Group } from 'src/groups/entities/group.entity';
import { Residential } from 'src/residentials/entities/residential.entity';
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

@Entity('residences')
export class Residence {
  @PrimaryGeneratedColumn('increment')
  residence_id: number;

  @Column()
  residence_residential_id: number;

  @Column()
  residence_number: number;

  @Column()
  residence_address: string;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;

  @ManyToOne(() => Residential)
  @JoinColumn({ name: 'residence_residential_id' })
  residential: Residential;
}
