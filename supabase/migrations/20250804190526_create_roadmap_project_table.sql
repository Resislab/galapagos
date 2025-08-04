create table "public"."roadmap_project" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "reference" text not null,
    "description" text,
    "budget" double precision,
    "budget_devise" text,
    "start_date" date not null,
    "end_date" date not null,
    "resource_usage_limit" double precision not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX roadmap_project_pkey ON public.roadmap_project USING btree (id);

alter table "public"."roadmap_project" add constraint "roadmap_project_pkey" PRIMARY KEY using index "roadmap_project_pkey";

grant delete on table "public"."roadmap_project" to "anon";

grant insert on table "public"."roadmap_project" to "anon";

grant references on table "public"."roadmap_project" to "anon";

grant select on table "public"."roadmap_project" to "anon";

grant trigger on table "public"."roadmap_project" to "anon";

grant truncate on table "public"."roadmap_project" to "anon";

grant update on table "public"."roadmap_project" to "anon";

grant delete on table "public"."roadmap_project" to "authenticated";

grant insert on table "public"."roadmap_project" to "authenticated";

grant references on table "public"."roadmap_project" to "authenticated";

grant select on table "public"."roadmap_project" to "authenticated";

grant trigger on table "public"."roadmap_project" to "authenticated";

grant truncate on table "public"."roadmap_project" to "authenticated";

grant update on table "public"."roadmap_project" to "authenticated";

grant delete on table "public"."roadmap_project" to "service_role";

grant insert on table "public"."roadmap_project" to "service_role";

grant references on table "public"."roadmap_project" to "service_role";

grant select on table "public"."roadmap_project" to "service_role";

grant trigger on table "public"."roadmap_project" to "service_role";

grant truncate on table "public"."roadmap_project" to "service_role";

grant update on table "public"."roadmap_project" to "service_role";


