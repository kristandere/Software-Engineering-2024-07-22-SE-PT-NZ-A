const express = require('express');
const router = express.Router();

const friends = [
  { id: 1, name: 'Krit' },
  { id: 2, name: 'Kat' },
  { id: 3, name: 'Koe' },
];


router.get('/filter', (req, res) => {
  const letter = req.query.letter;

  if (!letter || letter.length !== 1) {
    return res.status(400).json({ error: 'A single letter is required.' });
  }

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().startsWith(letter.toLowerCase())
  );

  res.json(filteredFriends);
});


router.get('/info', (req, res) => {
  const userAgent = req.get('User-Agent');
  const contentType = req.get('Content-Type');
  const accept = req.get('Accept');

  res.json({
    userAgent,
    contentType,
    accept,
  });
});


router.get('/:id', (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends.find(f => f.id === friendId);

  if (!friend) {
    return res.status(404).json({ error: 'Friend not found.' });
  }

  res.json(friend);
});


router.put('/:id', (req, res) => {
  const friendId = parseInt(req.params.id);
  const { name } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'A valid name is required.' });
  }

  const friendIndex = friends.findIndex(f => f.id === friendId);

  if (friendIndex === -1) {
    return res.status(404).json({ error: 'Friend not found.' });
  }

  friends[friendIndex].name = name;
  res.json(friends[friendIndex]);
});

module.exports = router;