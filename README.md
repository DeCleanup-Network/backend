# Chain Indexer Notification and Leaderboard Builder API

This API notifies a blockchain indexer about new submissions and triggers a leaderboard builder.

## Features

- Notify a chain indexer with submission data
- Trigger a leaderboard update
- Modular design with clear service responsibilities

## Prerequisites

- Node.js (v16+)
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/backend.git
    cd chain-notifier
    ```

2. Install dependencies:
    npm install express
    ```

3. Create a `.env` file in the root directory for environment variables if required.

## Usage

1. Start the server:
    node app.js
    ```

2. Use the `/api/notify` endpoint to notify the indexer and trigger the leaderboard.

### Example Request
**Endpoint**: `POST /api/notify`

**Body**:
```json
{
    "submissionData": {
        "userId": "05421",
        "submissionId": "fghij",
        "score": 40
    }
}
