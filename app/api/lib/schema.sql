CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,

  name TEXT NOT NULL,
  description TEXT,

  price NUMERIC(12,2) NOT NULL CHECK (price >= 0),

  image_url TEXT,

  category TEXT,

  tag TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
