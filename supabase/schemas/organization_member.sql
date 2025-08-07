CREATE TABLE organization_members
(
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organization (id),
    user_id         UUID REFERENCES auth.users (id),
    created_at      TIMESTAMPTZ      DEFAULT now()
);
