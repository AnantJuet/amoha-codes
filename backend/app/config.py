import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./amoha_local.db")

    # JWT Settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", "change_this_secret_in_prod")
    ALGORITHM: str = os.getenv("ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

    # Session
    SESSION_SECRET: str = os.getenv("SESSION_SECRET", "super-secret-session-key")

    # OAuth
    GOOGLE_CLIENT_ID: str = os.getenv("GOOGLE_CLIENT_ID", "")
    GOOGLE_CLIENT_SECRET: str = os.getenv("GOOGLE_CLIENT_SECRET", "")
    GOOGLE_REDIRECT_URI: str = os.getenv("GOOGLE_REDIRECT_URI", "http://localhost:8000/auth/google/callback")

    FACEBOOK_CLIENT_ID: str = os.getenv("FACEBOOK_CLIENT_ID", "")
    FACEBOOK_CLIENT_SECRET: str = os.getenv("FACEBOOK_CLIENT_SECRET", "")
    FACEBOOK_REDIRECT_URI: str = os.getenv("FACEBOOK_REDIRECT_URI", "http://localhost:8000/auth/facebook")

    # Frontend
    FRONTEND_URL: str = os.getenv("FRONTEND_URL", "http://localhost:5173")

    # CORS Origins - includes env var for production frontend URL
    @property
    def CORS_ORIGINS(self) -> list:
        origins = [
            # Local development
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
            "http://localhost:5175",
            "http://127.0.0.1:5175",
            "http://localhost:5176",
            "http://localhost:5177",
            "http://localhost:5178",
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://localhost:8000",
            "http://127.0.0.1:8000",
            # Production Railway URLs
            "https://blissful-happiness-production-7a4d.up.railway.app",
            "https://blissful-happiness-production.up.railway.app",
            # Production Hostinger domain
            "https://amohacodes.in",
            "https://www.amohacodes.in",
            "http://amohacodes.in",
            "http://www.amohacodes.in",
        ]
        # Add production frontend URL if set via env
        if self.FRONTEND_URL and self.FRONTEND_URL not in origins:
            origins.append(self.FRONTEND_URL)
        # Add any additional CORS origins from env
        extra_origins = os.getenv("CORS_ORIGINS", "")
        if extra_origins:
            origins.extend([o.strip() for o in extra_origins.split(",") if o.strip()])
        return origins


settings = Settings()
