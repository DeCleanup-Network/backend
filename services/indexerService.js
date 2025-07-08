exports.notifyIndexerService = async (submissionData) => {
    try {
        // Simulate notifying the blockchain indexer
        console.log('Notifying chain indexer with submission:', submissionData);

        // Simulate a successful response
        return { status: 'success', message: 'Indexer notified.' };
    } catch (error) {
        console.error('Error notifying indexer:', error);
        throw new Error('Failed to notify indexer.');
    }
};