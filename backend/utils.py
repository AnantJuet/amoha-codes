from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# ---------- REAL FIX ----------
def _truncate(password: str) -> str:
    # Bcrypt only supports up to 72 bytes
    return password.encode("utf-8")[:72].decode("utf-8", errors="ignore")

def hash_password(password: str) -> str:
    password = _truncate(password)
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    plain_password = _truncate(plain_password)
    return pwd_context.verify(plain_password, hashed_password)
