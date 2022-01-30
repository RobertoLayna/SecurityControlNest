import { Group } from 'src/groups/entities/group.entity';
export declare class Residential {
    residential_id: number;
    residential_group_id: number;
    residential_name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    group: Group;
}
