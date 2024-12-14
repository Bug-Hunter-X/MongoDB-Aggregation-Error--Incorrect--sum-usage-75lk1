# MongoDB Aggregation Error: Incorrect $sum Usage

This repository demonstrates a common error in MongoDB aggregation pipelines: using strings instead of field names within the $sum operator.

The `bug.js` file contains the erroneous code that leads to incorrect aggregation results or errors. The `bugSolution.js` file provides the corrected version.

## Problem

The original code attempts to sum the `amount` field in the aggregation pipeline, but incorrectly uses the string "$amount" instead of the actual field name `$amount` within the $sum operator.

## Solution

The corrected code uses the correct syntax for the $sum operator, ensuring accurate summation of the `amount` field.