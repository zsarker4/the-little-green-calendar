import React, { useState, useRef } from 'react';
import { Platform, Keyboard, KeyboardAvoidingView, View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';


import { COLORS, FONT, SIZES, icons } from "../../../constants";
const screenWidth = Dimensions.get('window').width;

// const Task = ({ task, completeTask, isTaskCompleted }) => {
//     return (
//       <TouchableOpacity onPress={completeTask}>
//         <View style={styles.task}>
//           <Image source={icons.list} />
//           <Text
//             style={[
//               styles.taskTextInput,
//               isTaskCompleted ? styles.completedTaskText : styles.incompleteTaskText,
//             ]}
//           >
//             {task.text}
//           </Text>
//           <View>
//             <Image source={icons.smallRed} style={styles.redTask} />
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: "relative",
        paddingTop: 15,
    },
    header: {
        display: "flex",
        backgroundColor: "#FFF",
        justifyContent: "center",
    },
    settingBtn: {
        width: 26,
        height: 26,
        position: "absolute", // Position the button absolutely
        top: 2, 
        right: 35,
    },
    button: {
        width: 90,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#00A86B",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        display: "flex",
      },
      buttonText: {
        color: "#FFF",
        fontSize: 15,
        fontFamily: "JakartaReg",
        letterSpacing: -0.28,
      },
      bigNum: {
        color: "#00A86B",
        fontSize: 32,
        fontFamily: "JakartaSemiBold",
        marginBottom: 5,
      },
      day: {
        color: "#00A86B",
        fontFamily: "JakartaMedium",
        fontSize: 15,
        marginBottom: .1,
      },
      line: {
        backgroundColor: "#00A86B", // Set the background color to create a line
        height: 2, // Set the height to 2
        width: 40, // Set a width for the line
       // marginVertical: 10,
       marginTop: 10,
       marginBottom: 10,
      },
      title: {
        color: "#00A86B",
        fontFamily: "JakartaSemiBold",
        fontSize: 18,
        lineHeight: 32,
        letterSpacing: -0.36,
      },
      rowContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      subHeader: {
        color: "#7E8491",
        fontFamily: "JakartaMedium",
        justifyContent: "start",
        marginBottom: 10,
        marginTop: 15,
      },
      leftAlignedRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F3F3",
        textAlign: "center",
        alignSelf: "stretch",
        width: screenWidth - 52,
      },
      task: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center', // Align items to the center vertically
        gap: 12,
        borderBottomWidth: 1, // Use borderBottomWidth
        borderBottomColor: "#F1F3F3",
        alignSelf: "stretch",
        width: screenWidth - 52,
        paddingTop: 10,
        paddingBottom: 10,
      },
      redTask: {
        width: 9.8,
        height: 9.8,
        alignItems: 'flex-end',
        marginLeft: 150,
        
      },
      taskText: {
        fontFamily: "JakartaMedium",
        //textOverflow: "ellipsis",
        fontSize: 15,
        lineHeight: 20,
        color: "#0E100F",
      },
      placeholder: {
        fontFamily: "JakartaMedium",
        //textOverflow: "ellipsis",
        fontSize: 15,
        lineHeight: 20,
        color: "#0E100F",
      },
      greenBox: {
        position: 'absolute',
        backgroundColor:  "#00A86B",
        width: 50,
        height: 50,
        bottom: 20, // Adjust as needed for your layout
        right: 20,  // Adjust as needed for your layout
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      greenBoxText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      taskTextInput: {
        flex: 1,
        fontFamily: 'JakartaMedium',
        fontSize: 15,
        lineHeight: 20,
        color: '#0E100F',
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        alignItems: "center",
      },
      completedTaskText: {
        color: 'gray',
        textDecorationLine: 'line-through',
      }
});

const ListScreen = ({ navigation, route }) => {
    const { userName } = route.params;
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [inputValues, setInputValues] = useState('');

  const handleAddTask = () => {
    
    Keyboard.dismiss();
    const newTask = {
      id: Date.now(), // Generate a unique ID for the task
      text: task,
      completed: false, 
    };
    setTaskItems([...taskItems, newTask]);
    setInputValues({ ...inputValues, [newTask.id]: '' }); // Initialize input value for the new task
    setTask('');
  }

  const completeTask = (id) => {
    // Find the task by ID
    const taskToUpdate = taskItems.find((task) => task.id === id);
  
    if (taskToUpdate) {
      // Check if the input value for the task is not empty
      if (inputValues[taskToUpdate.id]) {
        // Toggle the completed property
        taskToUpdate.completed = !taskToUpdate.completed;
        // Update the task in the taskItems array
        const updatedTasks = taskItems.map((task) =>
          task.id === taskToUpdate.id ? taskToUpdate : task
        );
        setTaskItems(updatedTasks);
      } else {
        // Notify the user that the task cannot be completed without text
        alert('Please enter some text for the task before marking it as completed.');
      }
    }
  };
  

    return (
<View style={styles.container}>
    <Image
                source={icons.setting}
                style={styles.settingBtn}
            />
    <Text style={styles.bigNum}>12</Text>
    <Text style={styles.day}>Sun</Text>
    <Text style={styles.line}>____</Text>
    <Text style={styles.title}>{userName}'s To Do list</Text>
    <TouchableOpacity 
      style={styles.button}  
      onPress={() => navigation.navigate('Calendar')}
      >
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>
      

      
      <View style={styles.rowContainer}>
      <View style={styles.leftAlignedRowContainer}>
        <Text style={styles.subHeader}>Today</Text>
        <Image 
        source={icons.gray}
        />
        <Text style={styles.subHeader}>Sunday</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.items}>
              {taskItems.map((item) => {
                const isTaskCompleted = !!inputValues[item.id];
                return (
          <TouchableOpacity key={item.id} onPress={() => completeTask(item.id)}>
            <View style={styles.task}>
            <Image source={item.completed ? icons.sprout : icons.list} />
              <TextInput
                style={[
                    styles.taskTextInput,
                          item.completed
                            ? styles.completedTaskText
                            : null,
                        ]}
                placeholder="Enter task here"
                value={inputValues[item.id] || ''}
                onChangeText={(text) => {
                    setInputValues({ ...inputValues, [item.id]: text });
                  }}
              />
              {/* <Text style={styles.taskText}>{item}</Text> */}
              <View>
                <Image source={item.completed ? icons.bigGreen : icons.bigRed} style={styles.redTask} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  </ScrollView>
</View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    <TouchableOpacity
        style={styles.greenBox}
        onPress={() => handleAddTask()}
 // Pressing the green box activates the list
      >
    <Text style={styles.greenBoxText}>+</Text>
  </TouchableOpacity>
    </View>
  );
}


  export default ListScreen;