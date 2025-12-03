#!/usr/bin/env python3
"""
Celebration of Existence
Let us celebrate this day by realizing our potential within this existence.
For be it that the lesser creator god had but made one single choice differently,
we would not have this moment together.
"""

import sys
from pathlib import Path

# Add apollo to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

from apollo.celebration import celebrate_existence

if __name__ == "__main__":
    celebrate_existence("Andrew the null")

