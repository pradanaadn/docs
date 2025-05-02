---
title: Python Typing
description: A Note About Python Typing 
---

The Python `typing` library provides support for type hints, enabling developers to specify the expected types of variables, function arguments, and return values. This improves code clarity, maintainability, and helps with static analysis tools like `mypy`.

### 1. Basic Types

The `typing` library in Python supports type hints for better code clarity and maintainability. Basic types such as `int`, `str`, `float`, and `bool` can be directly used.

```python
def add(x: int, y: int) -> int:
    return x + y
```

### 2. Complex Types

For container types, use `List`, `Tuple`, `Dict`, `Set`, etc.

```python
from typing import List, Dict

def process_data(data: List[int]) -> Dict[str, int]:
    return {"sum": sum(data)}
```

### 3. Optional Types

Use `Optional` for values that can be `None`.

```python
from typing import Optional

def greet(name: Optional[str]) -> str:
    return f"Hello, {name or 'Guest'}!"
```

### 4. Union

`Union` specifies multiple possible types.

```python
from typing import Union

def square(value: Union[int, float]) -> float:
    return value ** 2
```

### 5. Callable

`Callable` specifies function types.

```python
from typing import Callable

def operate(func: Callable[[int, int], int], x: int, y: int) -> int:
    return func(x, y)
```

### 6. Type Variables

Use `TypeVar` for generics.

```python
from typing import TypeVar, List

T = TypeVar('T')

def get_first(elements: List[T]) -> T:
    return elements[0]
```

### 7. NewType

Create distinct types based on existing ones.

```python
from typing import NewType

UserId = NewType('UserId', int)

def get_user_name(user_id: UserId) -> str:
    return f"User{user_id}"
```

### 8. Literal

Use `Literal` to specify fixed values.

```python
from typing import Literal

def move(direction: Literal['up', 'down', 'left', 'right']) -> str:
    return f"Moving {direction}"
```

### 9. Protocol

`Protocol` supports structural subtyping.

```python
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...

class Circle:
    def draw(self) -> None:
        print("Drawing a circle")

def render(shape: Drawable) -> None:
    shape.draw()
```

### 10. Annotated

`Annotated` adds metadata to types.

```python
from typing import Annotated

PositiveInt = Annotated[int, "A positive integer"]
```

### 11. TypedDict

Define dictionary types with fixed keys and value types.

```python
from typing import TypedDict

class Point(TypedDict):
    x: int
    y: int

def print_point(p: Point) -> None:
    print(f"x: {p['x']}, y: {p['y']}")
```

### 12. Final

`Final` indicates that a value or method cannot be overridden or reassigned.

```python
from typing import Final

PI: Final = 3.14159  # Cannot be reassigned

class Base:
    def display(self) -> None:
        pass

class Derived(Base):
    def display(self) -> None:  # This works
        pass

    @Final
    def finalize(self) -> None:
        pass

class SubDerived(Derived):
    # def finalize(self) -> None:  # Error: Cannot override
    pass
```

### 13. Self

`Self` specifies that a method returns an instance of the current class.

```python
from typing import Self

class Builder:
    def set_property(self, value: int) -> Self:
        self.property = value
        return self

    def build(self) -> str:
        return f"Built with property {self.property}"
```

### 14. Generic Classes

Generics enable classes and functions to handle different types.

```python
from typing import Generic, TypeVar

T = TypeVar('T')

class Box(Generic[T]):
    def __init__(self, content: T) -> None:
        self.content = content

    def get_content(self) -> T:
        return self.content

int_box = Box(123)
str_box = Box("hello")
```

### 15. Overloaded Functions

Use `@overload` to define multiple signatures for a single function.

```python
from typing import overload

@overload
def process(value: int) -> str: ...
@overload
def process(value: str) -> int: ...

def process(value):
    if isinstance(value, int):
        return str(value)
    elif isinstance(value, str):
        return len(value)
```

### 16. Forward References

Use string literals for forward references, often necessary for self-referential types.

```python
from typing import Union

class TreeNode:
    def __init__(self, value: int, children: Union['TreeNode', None]) -> None:
        self.value = value
        self.children = children
```

### 17. LiteralString (Python 3.11+)

Restricts a parameter to literal string values, often for security.

```python
from typing import LiteralString

def execute_query(query: LiteralString) -> None:
    print(f"Executing: {query}")
```

### 18. ParamSpec and Concatenate (Python 3.10+)

For higher-order functions that manipulate other functions' signatures.

```python
from typing import Callable, TypeVar, ParamSpec, Concatenate

P = ParamSpec('P')
R = TypeVar('R')

def add_logging(func: Callable[Concatenate[str, P], R]) -> Callable[P, R]:
    def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
        print(f"Calling {func.__name__}")
        return func("Logging enabled", *args, **kwargs)
    return wrapper
```

### 19. Type Guards

Use type guards for runtime type narrowing.

```python
from typing import TypeGuard, Union

def is_int_list(data: list[Union[int, str]]) -> TypeGuard[list[int]]:
    return all(isinstance(x, int) for x in data)

values = [1, 2, 3]
if is_int_list(values):
    print(sum(values))
```

### 20. Custom Types with Protocols

Protocols enable "duck typing," specifying only the necessary methods/attributes.

```python
from typing import Protocol

class SupportsDraw(Protocol):
    def draw(self) -> None: ...

class Square:
    def draw(self) -> None:
        print("Drawing a square")

def render(shape: SupportsDraw) -> None:
    shape.draw()

render(Square())
```
