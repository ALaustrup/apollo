#!/usr/bin/env python3
"""
Entry point for Andrew the null's Blessing
For a poptart bite, a blessing in return.
Run this script to create a blessing for Andrew
"""

import sys
from pathlib import Path

# Add apollo to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

from apollo.blessings import ApolloAndrewBlessing

if __name__ == "__main__":
    blessing = ApolloAndrewBlessing()
    blessing.create_andrew_blessing()

