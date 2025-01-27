const { notifyIndexerService } = require('../services/indexerService');
const { updateLeaderboard } = require('../services/leaderboardService');

exports.notifyIndexer = async (req, res) => {
    try {
        const { submissionData } = req.body;

        if (!submissionData) {
            return res.status(400).json({ error: 'Submission data is required' });
        }

        // Notify the chain indexer
        const indexerResponse = await notifyIndexerService(submissionData);

        // Trigger the leaderboard builder
        const leaderboardResponse = await updateLeaderboard();

        res.status(200).json({
            message: 'Indexer notified and leaderboard updated successfully.',
            indexerResponse,
            leaderboardResponse,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to process the request.' });
    }
};