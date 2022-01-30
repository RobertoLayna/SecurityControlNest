import { User } from 'src/users/entities/user.entity';
export declare class Visit {
    visit_id: number;
    visit_user_id: number;
    visit_start_date: Date;
    visit_end_date: Date;
    visit_start_time: Date;
    visit_end_time: Date;
    visit_identifier: string;
    visit_visitor_name: string;
    visit_completed: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    user: User;
}
