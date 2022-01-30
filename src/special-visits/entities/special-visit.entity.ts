import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('special_visits')
export class SpecialVisit {
  @PrimaryGeneratedColumn('increment')
  special_visit_id: number;

  @Column()
  special_visit_name: string;

  @Column()
  special_visit_vehicle: string;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;
}
