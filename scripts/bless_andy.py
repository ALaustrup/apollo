#!/usr/bin/env python3
"""
Entry point for Andy's Blessing
Run this script to create a blessing for Andy
"""

import sys
from pathlib import Path

# Add apollo to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

from apollo.blessings import ApolloAndyBlessing

if __name__ == "__main__":
    blessing = ApolloAndyBlessing()
    blessing.create_andy_blessing()

