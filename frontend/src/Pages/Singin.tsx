import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import UseAuthStore from '../store/AuthStore';
import useGoodLuckStore from '../store/goodLuck';
import useforfun from '../store/DT';
import axios from 'axios';
import { Usecount, useGdata } from '../store/G';

interface User {
  id: string;
  email: string;
  name: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function SignIn() {
  const { message, setMessage, sender, setSender } = useGoodLuckStore();
  const { addnewnumber, numbers } = useforfun();
  const { text, setText } = useGdata();
  const { count, increment, decrement } = Usecount();
  const { login } = UseAuthStore();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newnumber, setNewNumber] = useState<number>(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSender = message.trim().toUpperCase();
    setSender(formattedSender);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: User = { id: '1', email, name };
    login(mockUser);
    navigate('/home');
  };

  const handleAddNumber = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(newnumber)) return;
    addnewnumber(newnumber);
  };

  const handleAddText = (e: React.FormEvent) => {
    e.preventDefault();
    setText(text);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(0, 2));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="signincontainer min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg space-y-6">
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 border rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <audio controls>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div className="text-center">
            <video  height="240" controls className=" w-full rounded-lg shadow-md">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-800">Sign In</h1>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="Yourname@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
