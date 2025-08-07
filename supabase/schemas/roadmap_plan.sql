CREATE TABLE roadmap_plan
(
    id              uuid        NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_id uuid        NOT NULL,
    name            text        NOT NULL,
    slug            text        NOT NULL,
    description     text        NOT NULL,
    budget          float,
    budget_devise   text,
    start_date      date        NOT NULL,
    end_date        date        NOT NULL,
    created_at      timestamptz NOT NULL DEFAULT now(),
    created_by_id   uuid,
    updated_at      timestamptz NOT NULL DEFAULT now(),
    FOREIGN KEY (organization_id) REFERENCES organization (id) ON DELETE CASCADE,
    FOREIGN KEY (created_by_id) REFERENCES auth.users (id) ON DELETE SET NULL
);
ALTER TABLE roadmap_plan
    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view roadmap plans from their organization" ON roadmap_plan
    FOR SELECT USING (
    organization_id IN (SELECT organization_id
                        FROM organization_members
                        WHERE user_id = auth.uid())
    );

CREATE POLICY "Users can create roadmap plans in their organization" ON roadmap_plan
    FOR INSERT WITH CHECK (
    organization_id IN (SELECT organization_id
                        FROM organization_members
                        WHERE user_id = auth.uid())
    );

CREATE POLICY "Users can update roadmap plans from their organization" ON roadmap_plan
    FOR UPDATE USING (
    organization_id IN (SELECT organization_id
                        FROM organization_members
                        WHERE user_id = auth.uid())
    );

CREATE POLICY "Users can delete roadmap plans from their organization" ON roadmap_plan
    FOR DELETE USING (
    organization_id IN (SELECT organization_id
                        FROM organization_members
                        WHERE user_id = auth.uid())
    );

CREATE INDEX roadmap_plan_organization_fk ON roadmap_plan USING btree (organization_id);