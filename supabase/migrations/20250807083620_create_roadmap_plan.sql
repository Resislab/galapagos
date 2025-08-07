create table "public"."roadmap_plan" (
    "id" uuid not null default gen_random_uuid(),
    "organization_id" uuid not null,
    "name" text not null,
    "slug" text not null,
    "description" text not null,
    "budget" double precision,
    "budget_devise" text,
    "start_date" date not null,
    "end_date" date not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by_id" uuid,
    "updated_at" timestamp with time zone not null default now()
);


alter table "public"."roadmap_plan" enable row level security;

CREATE INDEX roadmap_plan_organization_fk ON public.roadmap_plan USING btree (organization_id);

CREATE UNIQUE INDEX roadmap_plan_pkey ON public.roadmap_plan USING btree (id);

alter table "public"."roadmap_plan" add constraint "roadmap_plan_pkey" PRIMARY KEY using index "roadmap_plan_pkey";

alter table "public"."roadmap_plan" add constraint "roadmap_plan_created_by_id_fkey" FOREIGN KEY (created_by_id) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."roadmap_plan" validate constraint "roadmap_plan_created_by_id_fkey";

alter table "public"."roadmap_plan" add constraint "roadmap_plan_organization_id_fkey" FOREIGN KEY (organization_id) REFERENCES organization(id) ON DELETE CASCADE not valid;

alter table "public"."roadmap_plan" validate constraint "roadmap_plan_organization_id_fkey";

grant delete on table "public"."roadmap_plan" to "anon";

grant insert on table "public"."roadmap_plan" to "anon";

grant references on table "public"."roadmap_plan" to "anon";

grant select on table "public"."roadmap_plan" to "anon";

grant trigger on table "public"."roadmap_plan" to "anon";

grant truncate on table "public"."roadmap_plan" to "anon";

grant update on table "public"."roadmap_plan" to "anon";

grant delete on table "public"."roadmap_plan" to "authenticated";

grant insert on table "public"."roadmap_plan" to "authenticated";

grant references on table "public"."roadmap_plan" to "authenticated";

grant select on table "public"."roadmap_plan" to "authenticated";

grant trigger on table "public"."roadmap_plan" to "authenticated";

grant truncate on table "public"."roadmap_plan" to "authenticated";

grant update on table "public"."roadmap_plan" to "authenticated";

grant delete on table "public"."roadmap_plan" to "service_role";

grant insert on table "public"."roadmap_plan" to "service_role";

grant references on table "public"."roadmap_plan" to "service_role";

grant select on table "public"."roadmap_plan" to "service_role";

grant trigger on table "public"."roadmap_plan" to "service_role";

grant truncate on table "public"."roadmap_plan" to "service_role";

grant update on table "public"."roadmap_plan" to "service_role";

create policy "Users can create roadmap plans in their organization"
on "public"."roadmap_plan"
as permissive
for insert
to public
with check ((organization_id IN ( SELECT organization_members.organization_id
   FROM organization_members
  WHERE (organization_members.user_id = auth.uid()))));


create policy "Users can delete roadmap plans from their organization"
on "public"."roadmap_plan"
as permissive
for delete
to public
using ((organization_id IN ( SELECT organization_members.organization_id
   FROM organization_members
  WHERE (organization_members.user_id = auth.uid()))));


create policy "Users can update roadmap plans from their organization"
on "public"."roadmap_plan"
as permissive
for update
to public
using ((organization_id IN ( SELECT organization_members.organization_id
   FROM organization_members
  WHERE (organization_members.user_id = auth.uid()))));


create policy "Users can view roadmap plans from their organization"
on "public"."roadmap_plan"
as permissive
for select
to public
using ((organization_id IN ( SELECT organization_members.organization_id
   FROM organization_members
  WHERE (organization_members.user_id = auth.uid()))));



