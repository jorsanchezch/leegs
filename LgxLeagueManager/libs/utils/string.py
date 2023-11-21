def pascal_to_snake(pascal):
    return re.sub(r'[A-Z]', r'_\1', pascal).lower()