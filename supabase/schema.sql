create table if not exists learner_profiles (
  id uuid primary key,
  device_key text not null unique,
  nickname text,
  age_band text not null,
  created_at timestamptz not null default now(),
  last_active_at timestamptz not null default now()
);

create table if not exists courses (
  id text primary key,
  title text not null,
  theme text not null,
  status text not null check (status in ('draft', 'published')),
  sort_order integer not null default 0
);

create table if not exists lesson_units (
  id text primary key,
  course_id text not null references courses(id) on delete cascade,
  title text not null,
  sort_order integer not null default 0
);

create table if not exists lesson_levels (
  id text primary key,
  unit_id text not null references lesson_units(id) on delete cascade,
  title text not null,
  level_type text not null default 'hanzi',
  pass_rule text not null default 'quiz-pass',
  sort_order integer not null default 0
);

create table if not exists hanzi_items (
  id text primary key,
  character text not null,
  pinyin text not null,
  meaning text not null,
  radical text not null,
  stroke_count integer not null,
  animation_ref text not null
);

alter table hanzi_items add column if not exists source text not null default 'seed';
alter table hanzi_items add column if not exists project_theme text not null default '自由单字';
alter table hanzi_items add column if not exists observation_hint text not null default '';
alter table hanzi_items add column if not exists mission_prompt text not null default '';

create table if not exists level_content_items (
  level_id text not null references lesson_levels(id) on delete cascade,
  hanzi_item_id text not null references hanzi_items(id) on delete cascade,
  intro_text text not null,
  hint_config jsonb not null default '{}'::jsonb,
  quiz_config jsonb not null default '{}'::jsonb,
  reward_config jsonb not null default '{}'::jsonb,
  primary key (level_id, hanzi_item_id)
);

create table if not exists learning_sessions (
  id uuid primary key,
  learner_profile_id uuid not null references learner_profiles(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  device_meta jsonb not null default '{}'::jsonb
);

create table if not exists progress_snapshots (
  learner_profile_id uuid not null references learner_profiles(id) on delete cascade,
  level_id text not null references lesson_levels(id) on delete cascade,
  status text not null check (status in ('locked', 'in_progress', 'completed')),
  score integer not null default 0,
  stars integer not null default 0,
  completed_at timestamptz,
  primary key (learner_profile_id, level_id)
);

create table if not exists quiz_attempts (
  id uuid primary key,
  session_id uuid not null references learning_sessions(id) on delete cascade,
  hanzi_item_id text not null references hanzi_items(id) on delete cascade,
  level_id text not null references lesson_levels(id) on delete cascade,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  total_mistakes integer not null default 0,
  result text not null check (result in ('failed', 'passed'))
);

create table if not exists quiz_stroke_events (
  id bigserial primary key,
  attempt_id uuid not null references quiz_attempts(id) on delete cascade,
  stroke_num integer not null,
  event_type text not null,
  mistakes_on_stroke integer not null default 0,
  total_mistakes integer not null default 0,
  strokes_remaining integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists admin_users (
  id uuid primary key,
  email text not null unique,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create table if not exists poem_library_entries (
  id text primary key,
  line_text text not null,
  poem_title text not null,
  author text not null,
  dynasty text not null,
  focus_character text not null,
  characters_included jsonb not null default '[]'::jsonb,
  difficulty_level text not null default 'starter',
  theme_tags jsonb not null default '[]'::jsonb,
  is_approved boolean not null default true,
  meaning_in_line text not null,
  kid_explanation text not null,
  source_note text not null
);

create table if not exists hanzi_poem_links (
  hanzi_id text not null references hanzi_items(id) on delete cascade,
  poem_library_entry_id text references poem_library_entries(id) on delete cascade,
  match_status text not null check (match_status in ('linked', 'pending', 'missing')),
  source text not null default 'seed',
  review_note text not null default '',
  reviewed_by text,
  created_at timestamptz not null default now(),
  primary key (hanzi_id)
);

create table if not exists custom_hanzi_requests (
  id uuid primary key,
  character text not null,
  age_band text not null,
  context_theme text,
  was_created boolean not null default false,
  match_status text not null check (match_status in ('linked', 'pending', 'missing')),
  created_at timestamptz not null default now()
);

create table if not exists generated_maps (
  id uuid primary key,
  theme_title text not null,
  theme_description text not null,
  theme_rule_type text not null,
  knowledge_point text,
  generation_mode text not null check (generation_mode in ('topic', 'random')),
  created_at timestamptz not null default now()
);

create table if not exists generated_map_items (
  id uuid primary key,
  generated_map_id uuid not null references generated_maps(id) on delete cascade,
  hanzi_id text not null references hanzi_items(id) on delete cascade,
  level_id text not null,
  sort_order integer not null,
  poem_library_entry_id text references poem_library_entries(id) on delete set null,
  created_at timestamptz not null default now()
);
